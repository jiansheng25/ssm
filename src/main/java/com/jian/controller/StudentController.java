package com.jian.controller;

import com.alibaba.fastjson.JSONObject;
import com.jian.pojo.*;
import com.jian.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.sql.SQLException;

@Controller
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentService studentService;


    /**
     * 学生登录
     * @param stu2
     * @param response
     * @param request
     * @throws Exception
     */
    @RequestMapping(value = "/login")
    public void stuLogin(Student stu2, HttpServletResponse response, HttpServletRequest request) throws Exception {
        request.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        PrintWriter out=response.getWriter();
        System.out.println(stu2.toString());
        String i="0";
        Student stu=studentService.stuLogin(stu2);
        if(stu!=null){
            i="1";
            if(!studentService.isOpenIdExsit(stu2.getOpendid())){
                studentService.addStudentOpenid(stu2.getOpendid(),stu2.getStuAccount());
            }
        }
        out.write(i);
    }

    //获取学生信息（包含简历）
    @RequestMapping("/findStuByOpenid")
    public void findStudentByOpendid(String opendid,HttpServletResponse response) throws Exception {
        response.setContentType("text/html;charset=utf-8");
        System.out.println(opendid);
        Student stu=studentService.findStudentByOpendid(opendid);
        response.getWriter().write(JSONObject.toJSON(stu).toString());
    }

    @RequestMapping("/findEduXpById")
    //获取学生教育经历ById
    public void findEduXpById(int eduId,HttpServletResponse response) throws Exception{
        response.setContentType("text/html;charset=utf-8");
        StuEduXp edu=studentService.findEduXpById(eduId);
        response.getWriter().write(JSONObject.toJSON(edu).toString());
    }

    @RequestMapping("/findSchoolXpById")
    //获取学生校园经历ById
    public void findSchoolXpById(int school_xp,HttpServletResponse response) throws Exception{
        response.setContentType("text/html;charset=utf-8");
        StuSchoolXp sc=studentService.findSchoolXpById(school_xp);
        System.out.println(sc.toString());
        response.getWriter().write(JSONObject.toJSON(sc).toString());
    }

    @RequestMapping("/findIntsXpById")
    //获取学生实习经历ById
    public void findIntsXpById(int intsId,HttpServletResponse response) throws Exception{
        response.setContentType("text/html;charset=utf-8");
        StuItershipXp ints=studentService.findItershipXpById(intsId);
        response.getWriter().write(JSONObject.toJSON(ints).toString());
    }

    @RequestMapping("/findProjectXpById")
    //获取学生项目经历ById
    public void findProjectXpById(int proId,HttpServletResponse response) throws Exception{
        response.setContentType("text/html;charset=utf-8");
        StuProjectXp pro=studentService.findProjectXpById(proId);
        response.getWriter().write(JSONObject.toJSON(pro).toString());
    }
}
