<?php

namespace App\Repositories;

use Brand;
use Input;
use JqGrid;
use Witooh\GridDataprovider\Criteria;

class BrandRepository extends BaseRepository
{

    public function __construct()
    {
        $this->model = new Brand();
    }

    public function findGridData()
    {
        $criteria = new Criteria($this->model->getTable());

        $criteria->compare('name', Input::get('query'));
        $criteria->compare('type', Input::get('type'));

        return JqGrid::make($criteria);
    }

    public function destroy(array $idList)
    {

        $seriesId = \Series::whereIn('brand_id', $idList)->lists('id');

        if (!empty($seriesId)) {
            \Product::whereIn('series_id', $seriesId)->delete();
        }

        \Series::whereIn('brand_id', $idList)->delete();

        $this->model->whereIn('id', $idList)->delete();
    }

    public function findByType($type){
        return $this->model->where('type', $type)->get();
    }
}