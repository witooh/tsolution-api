<?php


class Category extends Eloquent {

    protected $table = 'category';

    protected $fillable = array('name', 'created_by');
}