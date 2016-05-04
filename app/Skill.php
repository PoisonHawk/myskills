<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class Skill extends Model
{

    public static function getSkills($id=null){

      return DB::table('skills')->select('name', 'rate')->get();

    }

    /**
    *@todo добавить user_id;
    */
    public static function checkUniqueName($name){
        $skill = self::where('name', $name)->get();

        return count($skill) === 0;
    }

}
