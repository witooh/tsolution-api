<?php


class FaqDetail extends Eloquent {

    protected $table = 'faq_detail';

    protected $fillable = array('category_id', 'title', 'link');
}