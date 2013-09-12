<?php

namespace App\Repositories;

use FileDealer;
use Input;
use JqGrid;
use Witooh\GridDataprovider\Criteria;

class FileRepository extends BaseRepository
{

    public function __construct()
    {
        $this->model = new FileDealer();
    }

    public function findGridData()
    {
        $criteria = new Criteria($this->model->getTable());

        $criteria->compare('title', Input::get('title'));

        return JqGrid::make($criteria);
    }
}