<?php
/**
 * Created by PhpStorm.
 * User: Monyk
 * Date: 09.04.2016
 * Time: 20:07
 */
class Model_Notes extends Model
{

    function getNotes($email)
    {
        $res = $this->mysqli->query("SELECT `id`, `text`, `label`, `color` FROM `notes` WHERE `email` = '$email'");
        $ret = [];
        while ($row = $res->fetch_assoc())
            $ret[] = $row;
        return $ret;
    }

    function addNote($email, $id, $label = null, $text, $color)
    {
        $id = intval($id);
        if ($this->mysqli->query("INSERT INTO `notes`(`id`,`email`,`text`,`label`, `color`)
                                  VALUES ('$id','$email', '$text', '$label', '$color')"))
            return "Fine";
        else
            return "Shit";
    }

    function  removeNotes($ids, $email)
    {
        $res = "Fine";
        foreach ($ids as $i)
            if (!$this->mysqli->query("DELETE FROM `notes` WHERE `email` = '$email' AND `id` = '$i'"))
                $res = "Shit";
        return $res;
    }

    function updateNote($note, $email)
    {
        $res = "Fine";
        $id = $note['id'];
        $text = $note['text'];
        $label = $note['label']? : null;
        $color = $note['color'];
        if(!$this->mysqli->query("UPDATE `notes` SET `text` = '$text', `label` = '$label', `color` = '$color'
                                  WHERE `id` = '$id' AND `email` = '$email'"))
            $res = "Nope";
        return $res;
    }
}