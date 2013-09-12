<?php

namespace App\Validators;


use Witooh\Validators\IValidator;
use App;
use Validator;
use Input;

class EditUserValidator extends IValidator {

    protected $rule = array(
        'email'=>'required|checkeditemail',
        'password'=>'required|min:5',
        'name'=>'required',
    );

    protected function registerCustomValidators(){
        Validator::extend('checkeditemail', function($attribute, $value, $parameters)
        {
            /** @var \App\Repositories\UserRepository $userRepository */
            $userRepository = App::make('UserRepository');
            return $userRepository->isEmailUniqueExceptMe(Input::get('id'), Input::get('email'));
        });
    }
}