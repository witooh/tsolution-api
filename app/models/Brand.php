<?php


class Brand extends Eloquent {

    protected $table = 'brand';

    protected $fillable = array('name', 'type');
}