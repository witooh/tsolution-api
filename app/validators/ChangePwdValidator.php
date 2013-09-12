<?php

namespace App\Validators;

use Input;
use Witooh\Validators\IValidator;
use Validator;
use Hash;
use App;

class ChangePwdValidator extends IValidator {

    protected $rule = array(
        'old_password'=>'required|checkpassword',
        'new_password'=>'required|min:5|confirmed',
        'confirm_password'=>'required',
    );


    protected function registerCustomValidators(){
        Validator::extend('checkpassword', function($attribute, $value, $parameters)
        {
            /** @var \App\Repositories\UserRepository $userRepository */
            $userRepository = App::make('UserRepository');
            $user = $userRepository->findById(Input::get('id'));
            if(!empty($user) && Hash::check($value, $user->getAuthPassword())){
                return true;
            }

            return false;
        });
    }
}