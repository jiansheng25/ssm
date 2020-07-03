package com.jian.controller;

import com.alibaba.fastjson.JSONObject;
import com.jian.pojo.Application;
import com.jian.pojo.ApplyDetail;
import com.jian.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Controller
@RequestMapping("/apply")
public class ApplicationController {

    @Autowired
    private ApplicationService applicationService;

    //获取应聘信息
    @ResponseBody
    @RequestMapping("/findApply")
    public  String findAll(String status,int pageIndex){
        List<ApplyDetail> applys= applicationService.findApplicationByStatus(status,pageIndex);
        Iterator<ApplyDetail> iterator = applys.iterator();
        while(iterator.hasNext()) {
            ApplyDetail apply = iterator.next();
            if(apply.getJobPostion()==null){
                iterator.remove();
            }
        }
        return JSONObject.toJSON(applys).toString();
    }

    //处理应聘
    @RequestMapping("/manager")
    public void ApplyManager(String status,int applyId,HttpServletResponse response) throws IOException {
         int res=applicationService.ApplyManager(status,applyId);
         if(res==1)response.getWriter().write("1");
         else response.getWriter().write("0");
    }
}
