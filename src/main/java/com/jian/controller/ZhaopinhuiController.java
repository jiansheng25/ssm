package com.jian.controller;

import com.alibaba.fastjson.JSONObject;
import com.jian.pojo.Zhaopinhui;
import com.jian.pojo.Zph_company;
import com.jian.service.CompanyService;
import com.jian.service.ZhaopinhuiService;
import jdk.management.resource.internal.inst.FileOutputStreamRMHooks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/zph")
public class ZhaopinhuiController {
    @Autowired
    ZhaopinhuiService zhaopinhuiService;
    @Autowired
    CompanyService companyService;

    /**
     * 获取所有招聘会
     * @param pageIndex
     * @param response
     * @throws Exception
     */
    @RequestMapping("/findAllZphByPage")
    public void findAllZphByPage(int pageIndex, HttpServletResponse response) throws Exception {
        response.setContentType("text/html;charset=utf-8");
        System.out.println("-------------");
        System.out.println(pageIndex);
        List<Zhaopinhui> zph=zhaopinhuiService.findAllZphByPage(pageIndex);
        System.out.println(zph.size());
        response.getWriter().write(JSONObject.toJSON(zph).toString());
    }

    @RequestMapping("/findAllCompanyByZphId")
    public void findAllCompanyByZphId(int zphId,HttpServletResponse response) throws Exception{
        response.setContentType("text/html;charset=utf-8");
        System.out.println("-------------");
        System.out.println(zphId);
        List<Zhaopinhui> zph=zhaopinhuiService.findAllCompanyByZphId(zphId);
        System.out.println(zph.size());
        response.getWriter().write(JSONObject.toJSON(zph).toString());
    }
}
