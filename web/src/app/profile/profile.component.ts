import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import { InstitutionService } from '../institution.service';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  panelOpenState = false;
  userDetails;
  disableText = true;
  inst_data;

  constructor(private userService: UserService,
    private toastr: ToastrService,
    private inst_services: InstitutionService,
    private messageService: MessageService) {

    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));

  }

  onSubmit() {
    this.userService.updateUser(this.userDetails._id, this.form.value).subscribe((res) => {
      if (res) {
        this.toastr.success('User updated succesfully');
        this.sendMessage(this.form.get('username').value)
        this.ngOnInit();
      } else {
        this.toastr.error('Something went wrong');
      }
    });
  }
  onSubmitInst() {
    const Inst_data = {
      user_id: this.userDetails._id,
      institution: this.Inst_form.get('institution').value,
      course: this.Inst_form.get('course').value
    };
    this.inst_services.postInstitution(Inst_data).subscribe((res) => {
      if (res) {
        this.toastr.success('User updated succesfully');
      } else {
        this.toastr.error('Something went wrong');
      }
    });
  }


  ngOnInit() {
    this.userService.getUserById(this.userDetails._id).subscribe(res => {
      let userdata = res as any;
      this.setValueUser(userdata);
    });
    this.inst_services.getInstitution(this.userDetails).subscribe(res => {
      let institution_data = res as any;
      console.log(institution_data);
      institution_data.forEach(data => {
        this.inst_data = data;
        this.setValueInst(this.inst_data);
      })
    });
  }

  setValueUser(details) {
    this.form.controls.username.setValue(details.username);
    this.form.controls.email.setValue(details.email);
    this.form.controls.address.setValue(details.address);
    this.form.controls.pin.setValue(details.pin);
    this.form.controls.phone.setValue(details.phone);
  }
  setValueInst(data) {
    this.Inst_form.controls.institution.setValue(data.institution);
    this.Inst_form.controls.course.setValue(data.course);
  }

  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    address: new FormControl(null, Validators.required),
    pin: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  Inst_form = new FormGroup({
    institution: new FormControl('', Validators.required),
    course: new FormControl('', Validators.required),
  });

  sendMessage(message): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage(message);
  }
}
