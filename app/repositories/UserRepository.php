<?php

namespace App\Repositories;

use Witooh\GridDataprovider\Criteria;
use DB;
use JqGrid;
use Input;

class UserRepository extends BaseRepository
{

    public function __construct(){
        $this->model = new \User();
    }

    public function findGridData()
    {
        $criteria = new Criteria($this->model->getTable());

        $criteria->compare('name', Input::get('query'));
        $criteria->orCompare('email', Input::get('query'));
        $criteria->orCompare('company_name', Input::get('query'));
        $criteria->query->whereNull('deleted_at');

        return JqGrid::make($criteria);
    }

    public function isEmailUniqueExceptMe($id, $email){
        if($this->model->where('email', $email)->where('id', '<>', $id)->count() > 0){
            return false;
        }

        return true;
    }

    public function resetPassword($id){
        $user = $this->model->find($id);
        $user->password = $user->email;
        $user->save();
    }
}