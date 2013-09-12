<?php


class KnowledgeDetail extends Eloquent {

    protected $table = 'knowledge_detail';

    protected $fillable = array('category_id', 'title', 'link');
}