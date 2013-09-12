<?php

namespace App\Repositories;

use Category;
use Input;
use JqGrid;
use Witooh\GridDataprovider\Criteria;

class CategoryRepository extends BaseRepository
{

    public function __construct()
    {
        $this->model = new Category();
    }
}