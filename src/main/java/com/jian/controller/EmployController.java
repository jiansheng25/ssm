package com.jian.controller;

import com.alibaba.fastjson.JSONObject;
import com.jian.pojo.Application;
import com.jian.pojo.EmployCompany;
import com.jian.pojo.Perfer;
import com.jian.pojo.SchoolEm;
import com.jian.service.EmploymentService;
        import com.jian.utils.CustomDateConverter;
import org.apache.ibatis.annotations.Select;
import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.stereotype.Controller;
        import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
        import java.io.IOException;
        import java.text.SimpleDateFormat;
        import java.util.List;

@Controller
@RequestMapping("/employ")
public class EmployController {
    @Autowired
    EmploymentService employmentService;

    //查看所有职位
    @RequestMapping("findAllEm")
    public void findAllEmpBypageAndCity(String workPlace, int pageIndex, HttpServletResponse response) throws Exception {
        response.setContentType("text/html;charset=utf-8");
        System.out.println("-------------");
        System.out.println(pageIndex+workPlace);
        List<EmployCompany> emps=employmentService.findAllEmployBypageAndCity(workPlace,pageIndex);
        System.out.println(emps.size());
        response.getWriter().write(JSONObject.toJSON(emps).toString());
    }

    //模糊查询职位
    @RequestMapping("findByName")
    public void findPostionByName(String name,String workPlace,HttpServletResponse response) throws Exception{
        response.setContentType("text/html;charset=utf-8");
        System.out.println(name+workPlace);
        List<EmployCompany> emps=employmentService.findPostionByName(name,workPlace);
        System.out.println(emps.size());
        response.getWriter().write(JSONObject.toJSON(emps).toString());
    }

    //根据城市查看职位
    @RequestMapping("findAllPostionByCity")
    public void findAllPostionByCity(String workPlace,  HttpServletResponse response) throws Exception {
        response.setContentType("text/html;charset=utf-8");
        System.out.println("-------------");
        System.out.println(workPlace);
        List<EmployCompany> emps=employmentService.findAllPostionByCity(workPlace);
        System.out.println(emps.size());
        response.getWriter().write(JSONObject.toJSON(emps).toString());
    }

    //根据Id查看职位
    @RequestMapping("findPostionById")
    public void findPostionById(int employId,  HttpServletResponse response) throws Exception {
        response.setContentType("text/html;charset=utf-8");
        System.out.println("-------------");
        System.out.println(employId);
        EmployCompany emp=employmentService.findPostionById(employId);
        System.out.println(emp.toString());
        response.getWriter().write(JSONObject.toJSON(emp).toString());
    }

    //获取某公司在招的职位
    @RequestMapping("findPostionByCompany")
    public void findPostionByCompany(String account,  HttpServletResponse response) throws Exception {
        response.setContentType("text/html;charset=utf-8");
        System.out.println("-------------");
        System.out.println(account);
        List<EmployCompany> emps= employmentService.findPostionByCompany(account);
        response.getWriter().write(JSONObject.toJSON(emps).toString());
    }

    /**
     * 查看已申请的职位
     * @param opendid
     * @param status
     * @param response
     * @throws Exception
     */
    @RequestMapping("/findPostionByStatus")
    public void findPostionByStatus(String opendid,String status, HttpServletResponse response) throws Exception {
        response.setContentType("text/html;charset=utf-8");
        System.out.println("-------------");
        System.out.println(opendid+status);
        List<Application> apps= employmentService.findAppliedPostion(opendid,status);
        response.getWriter().write(JSONObject.toJSON(apps).toString());
    }

    //查看已收藏的职位
    @RequestMapping("/findPrefer")
    public void findCollectedPostionByOpenid(String opendid,HttpServletResponse response) throws Exception {
        response.setContentType("text/html;charset=utf-8");
        System.out.println("-------------");
        System.out.println(opendid);
        List<Perfer> prefers= employmentService.findCollectedPostionByOpenid(opendid);
        response.getWriter().write(JSONObject.toJSON(prefers).toString());
    }

    //判断是否已收藏职位
    @RequestMapping("/isPrefer")
    public void isPrefer(String opendid,int employId,HttpServletResponse response) throws Exception {
        response.setContentType("text/html;charset=utf-8");
        System.out.println("-------------");
        System.out.println(opendid+employId);
        String i="0";//未收藏
        if(employmentService.isCollected(opendid,employId)) i="1";
        response.getWriter().write(i);
    }

    //收藏职位
    @RequestMapping("/collect")
    public void collect(String opendid,int employId,HttpServletResponse response) throws Exception {
        response.setContentType("text/html;charset=utf-8");
        System.out.println("-------------");
        System.out.println(opendid+employId);
        String i="0";
        if(employmentService.isCollected(opendid,employId)){
            employmentService.deleteCollection(opendid,employId);
            i="1";
        }else {
            employmentService.collectPostion(opendid,employId);
            i="1";
        }
        response.getWriter().write(i);
    }

    //申请职位
    @RequestMapping("/apply")
    public void applyPostion(String opendid,int employId,HttpServletResponse response) throws Exception{
        response.setContentType("text/html;charset=utf-8");
        System.out.println("-------------");
        String i="0";
        if(!employmentService.isApply(opendid,employId)){
            employmentService.applyPostion(opendid,employId);
            i="1";
        }else{ i="-1";}
        response.getWriter().write(i);
    }

    //获取校方发布的职位
    @ResponseBody
    @RequestMapping("/findEmpOfSchool")
    public String findEmpOfSchool(Integer pageIndex) throws Exception {
        System.out.println(pageIndex+"-------");
        List<SchoolEm> emps=employmentService.findEmpOfSchool(pageIndex);
        return JSONObject.toJSON(emps).toString();
    }
}
