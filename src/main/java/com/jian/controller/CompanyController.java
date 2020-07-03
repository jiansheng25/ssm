package com.jian.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.jian.pojo.Company;
import com.jian.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/company")
public class CompanyController {
    @Autowired
    CompanyService companyService;

    //获取所有企业
    @ResponseBody
    @RequestMapping("/fingAllCompany")
    public String fingAllCompany(Integer pageIndex,String status1){
        List<Company> companies=companyService.getCompany(pageIndex,status1);
        return JSONObject.toJSON(companies).toString();
    }

}
