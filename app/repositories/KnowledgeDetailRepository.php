<?php

namespace App\Repositories;

use KnowledgeDetail;
use Input;
use JqGrid;
use Witooh\GridDataprovider\Criteria;

class KnowledgeDetailRepository extends BaseRepository
{

    public function __construct()
    {
        $this->model = new KnowledgeDetail();
    }

    public function findGridData()
    {
        $criteria = new Criteria($this->model->getTable());

        $criteria->compare('title', Input::get('title'));

        $criteria->query->leftJoin('knowledge_category', 'knowledge_category.id', '=', 'knowledge_detail.category_id');

        $criteria->compare('knowledge_category.name', Input::get('category_name'));

        $criteria->query->select(
            array(
                'knowledge_detail.*',
                'knowledge_category.name as category_name',
            )
        );

        return JqGrid::make($criteria, 'knowledge_detail.id');
    }
}