<?php

class ProductController extends BaseController
{

    protected $repository;

    public function __construct()
    {
        $this->repository = App::make('ProductRepository');
    }

    public function postCreate()
    {
        $id = $this->repository->create(Input::all());
        JsonResponse::success(array('id' => $id));
    }

    public function getDataprovider()
    {
        return Response::json($this->repository->findGridData()->getData());
    }

    public function postDestroy()
    {
        $this->repository->destroy(Input::get('id'));
        JsonResponse::success();
    }

    public function getData($id)
    {
        $data = $this->repository->findById($id);
        if (empty($data)) {
            JsonResponse::notfound();
        }
        JsonResponse::success($data->toArray());
    }

    public function postUpdate($id)
    {
        $this->repository->edit($id, Input::all());
        JsonResponse::success();
    }

    public function getAllbybrandid($id){
        $data = $this->repository->findAllByBrandId($id);
        JsonResponse::success($data);
    }

    public function getDatabyname($id){
        $data = $this->repository->findByIdWithBrandAndSeries($id);
        return JsonResponse::success($data);
    }
}