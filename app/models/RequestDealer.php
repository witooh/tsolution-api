<?php


class RequestDealer extends Eloquent {

    protected $table = 'dealer_request';

    protected $fillable = array('title', 'content', 'created_by');
}