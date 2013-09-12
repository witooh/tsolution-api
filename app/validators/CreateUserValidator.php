<?php

namespace App\Validators;


use Witooh\Validators\IValidator;

class CreateUserValidator extends IValidator {

    protected $rule = array(
        'email'=>'required|unique:user',
        'password'=>'required|min:5',
        'name'=>'required',
    );
}