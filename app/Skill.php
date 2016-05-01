<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    public static function getSkills($id=null){

      return self::all()->toJSON();

    }

}
