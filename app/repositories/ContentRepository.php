<?php

namespace App\Repositories;

use Content;
use Input;
use JqGrid;
use Witooh\GridDataprovider\Criteria;

class ContentRepository extends BaseRepository
{

    public function __construct()
    {
        $this->model = new Content();
    }

    public function findGridData()
    {
        $criteria = new Criteria($this->model->getTable());

        $criteria->compare('title', Input::get('title'));

        $criteria->query->leftJoin('category', 'content.category_id', '=', 'category.id');
        $criteria->query->leftJoin('user', 'content.created_by', '=', 'user.id');

        $criteria->compare('category.id', Input::get('category_id'));
        $criteria->query->whereNotIn('content.id', array(1, 2, 3, 4));
        $criteria->query->whereNotIn('content.category_id', array('7', '6'));

        $criteria->query->select(
            array(
                'content.id',
                'content.title',
                'content.short',
                'content.thumb',
                'category.name as category_name',
                'content.created_at',
                'content.updated_at'
            )
        );

        return JqGrid::make($criteria, 'content.id');
    }

    public function findGridDataAnnounce()
    {
        $criteria = new Criteria($this->model->getTable());

        $criteria->compare('title', Input::get('title'));

        $criteria->query->leftJoin('category', 'content.category_id', '=', 'category.id');
        $criteria->query->leftJoin('user', 'content.created_by', '=', 'user.id');

        $criteria->query->where('category.id', 7);

        $criteria->query->select(
            array(
                'content.id',
                'content.title',
                'content.short',
                'content.thumb',
                'category.name as category_name',
                'content.created_at',
                'content.updated_at'
            )
        );

        return JqGrid::make($criteria, 'content.id');
    }

    public function findNewsById($id)
    {
        return $this->model->where('category_id', 1)->find($id);
    }

    public function findEventById($id)
    {
        return $this->model->where('category_id', 2)->find($id);
    }
}