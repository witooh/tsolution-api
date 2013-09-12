<?php

namespace App\Repositories;

use Witooh\GridDataprovider\Criteria;
use JqGrid;
use Input;
use Series;
use Brand;

class SeriesRepository extends BaseRepository
{

    public function __construct(){
        $this->model = new Series();
    }

    public function findGridData()
    {
        $criteria = new Criteria($this->model->getTable());

        $criteria->compare('series.name', Input::get('query'));

        $criteria->query->leftJoin('brand', 'brand.id', '=', 'series.brand_id');

        $criteria->compare('brand.type', Input::get('brand_type'));
        $criteria->compare('brand.id', Input::get('brand_id'));

        $criteria->query->select(array('series.*', 'brand.name as brand_name', 'brand.type'));

        return JqGrid::make($criteria, 'series.id');
    }

    public function findName($column){
        return $this->model->groupBy('name')->get($column);
    }

    public function findAllByBrandId($brand_id){
        return $this->model->where('brand_id', $brand_id)->get();
    }
}