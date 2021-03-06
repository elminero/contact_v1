<?php
/* @var $this PictureController */
/* @var $model Picture */

$this->breadcrumbs=array(
	'Pictures'=>array('index'),
	$model->file_name=>array('view','id'=>$model->id),
	'Update',
);

$this->menu=array(
	array('label'=>'List Picture', 'url'=>array('index')),
	array('label'=>'Create Picture', 'url'=>array('create')),
	array('label'=>'View Picture', 'url'=>array('view', 'id'=>$model->id)),
	array('label'=>'Manage Picture', 'url'=>array('admin')),
);
?>

<h1>Update Picture <?php echo $model->id; ?></h1>

<?php $this->renderPartial('_update', array('model'=>$model)); ?>