<?php

class ContentController extends BaseController
{

    protected $repository;

    public function __construct()
    {
        $this->repository = App::make('ContentRepository');
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

    public function getAnnouncedataprovider()
    {
        return Response::json($this->repository->findGridDataAnnounce()->getData());
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

    public function getNews($id)
    {
        $data = $this->repository->findNewsById($id);
        if (empty($data)) {
            JsonResponse::notfound();
        }
        JsonResponse::success($data->toArray());
    }

    public function getEvent($id)
    {
        $data = $this->repository->findEventById($id);
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
}