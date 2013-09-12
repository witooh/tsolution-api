<?php

namespace App\Repositories;

use RequestDealer;
use Input;
use JqGrid;
use Witooh\GridDataprovider\Criteria;

class RequestRepository extends BaseRepository
{

    public function __construct()
    {
        $this->model = new RequestDealer();
    }

    public function create($attr){
        $attr['content'] = str_replace(array("\r\n", "\n", "\r"), '<br/>', $attr['content']);
        $model = $this->model->create($attr);
        return $model->id;
    }

    public function findGridData()
    {
        $criteria = new Criteria($this->model->getTable());

        $criteria->compare('title', Input::get('title'));

        $criteria->query->leftJoin('user', 'user.id', '=', 'dealer_request.created_by');

        $criteria->query->select(
            array(
                'dealer_request.*',
                'user.email',
                'user.phone',
                'user.name',
                'user.company_name'
            )
        );

        return JqGrid::make($criteria, 'dealer_request.id');
    }

    public function findById($id){

        $this->model = $this->model->query();

        $this->model->leftJoin('user', 'user.id', '=', 'dealer_request.created_by');

        $this->model->select(
            array(
                'dealer_request.*',
                'user.email',
                'user.phone',
                'user.name',
                'user.company_name'
            )
        );

        $this->model->where('dealer_request.id', $id);

        return $this->model->first();
    }
}