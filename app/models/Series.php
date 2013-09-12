<?php


class Series extends Eloquent {

    protected $table = 'series';

    protected $fillable = array('name', 'brand_id', 'type');
}