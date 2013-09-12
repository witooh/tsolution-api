<?php

namespace App\Repositories;

use Witooh\GridDataprovider\Criteria;
use JqGrid;
use Input;
use Product;
use Series;
use Brand;

class ProductRepository extends BaseRepository
{

    public function __construct(){
        $this->model = new Product();
    }

    public function findGridData()
    {
        $criteria = new Criteria($this->model->getTable());

        $criteria->compare('product.name', Input::get('query'));

        $criteria->query->leftJoin('series', 'series.id', '=', 'product.series_id');
        $criteria->query->leftJoin('brand', 'brand.id', '=', 'series.brand_id');

        $criteria->compare('brand.type', Input::get('brand_type'));
        $criteria->compare('brand.id', Input::get('brand_id'));
        $criteria->compare('series.name', Input::get('series_name'));

        $criteria->query->select(
            array(
                'product.*',
                'brand.name as brand_name',
                'brand.type',
                'series.name as series_name'
            )
        );

        return JqGrid::make($criteria, 'product.id');
    }

    public function findAllByBrandId($brand_id){
        $query = $this->model->getQuery();
        $query->leftJoin('series', 'series.id', '=', 'product.series_id');
        $query->leftJoin('brand', 'brand.id', '=', 'series.brand_id');
        $query->where('brand.id', $brand_id);
        $query->select(
            array(
                'product.id',
                'product.name',
                'product.img',
                'product.series_id',
                'series.name as series_name',
            )
        );
        $query->orderBy('product.name', 'asc');

        return $query->get();
    }

    public function findByIdWithBrandAndSeries($id){
        $query = $this->model->getQuery();
        $query->leftJoin('series', 'series.id', '=', 'product.series_id');
        $query->leftJoin('brand', 'brand.id', '=', 'series.brand_id');
        $query->where('product.id', $id);
        $query->select(
            array(
                'product.*',
                'series.name as series_name',
                'brand.name as brand_name',
            )
        );

        return $query->first();
    }
}