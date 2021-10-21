import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from 'src/app/domain/domain';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {
  form!: FormGroup;
  @Input() title="登陆";
  @Input() subtitle="使用用户名密码登陆"
  @Input() btnText="注册？";
  @Input() forgotText="忘记密码";
  @Output() submitEvent= new EventEmitter<Auth>();
  constructor(private fb :FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      login:[
        '',
        Validators.compose([
          Validators.required
        ]
        )
      ],
      password:[
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50)
        ])
      ]
    })
  }

  submit({value,valid}:FormGroup,ev:Event){
    if(!valid){
      return;
    }
    this.submitEvent.emit(value);
  }

  

}
