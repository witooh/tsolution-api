<?php


class Product extends Eloquent {

    protected $table = 'product';

    protected $fillable = array('name','series_id', 'thumb', 'img', 'require', 'intro', 'detail', 'feature', 'spec', 'download');
}