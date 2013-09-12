<?php

namespace App\Repositories;

use Witooh\GridDataprovider\Criteria;
use DB;
use JqGrid;
use Input;
use Brand;

class BaseRepository
{
    /**
     * @var \Eloquent
     */
    protected $model;

    public function destroy(array $idList){
        $this->model->whereIn('id', $idList)->delete();
    }

    public function create($attr){
        $model = $this->model->create($attr);
        return $model->id;
    }

    public function edit($id, $attr){
        return $this->model->find($id)->update($attr);
    }

    public function findById($id){
        return $this->model->find($id);
    }

    public function findAll($column = array('*')){
        return $this->model->all($column);
    }
}