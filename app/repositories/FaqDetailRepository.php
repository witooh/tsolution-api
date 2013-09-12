<?php

namespace App\Repositories;

use FaqDetail;
use Input;
use JqGrid;
use Witooh\GridDataprovider\Criteria;

class FaqDetailRepository extends BaseRepository
{

    public function __construct()
    {
        $this->model = new FaqDetail();
    }

    public function findGridData()
    {
        $criteria = new Criteria($this->model->getTable());

        $criteria->compare('title', Input::get('title'));

        $criteria->query->leftJoin('faq_category', 'faq_category.id', '=', 'faq_detail.category_id');

        $criteria->compare('faq_category.name', Input::get('category_name'));

        $criteria->query->select(
            array(
                'faq_detail.*',
                'faq_category.name as category_name',
            )
        );

        return JqGrid::make($criteria, 'faq_detail.id');
    }
}