<?php


class Content extends Eloquent {

    protected $table = 'content';

    protected $fillable = array('title', 'img', 'thumb', 'short', 'content', 'created_by', 'category_id', 'published');
}