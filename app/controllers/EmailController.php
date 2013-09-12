<?php

class EmailController extends BaseController {

	public function postContact()
	{
        $data = Input::all();
        Mail::queue('emails.contact', array('data'=>$data), function($message) use ($data)
        {
            $message->to('info@tsolutions.co.th', 'Skywatch')->subject('TSolutions: ' . $data['name'] . ' contact you from our website');
        });
	}

}