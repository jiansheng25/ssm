package com.jian.controller;

import com.alibaba.fastjson.JSONObject;
import com.jian.pojo.Xuanjianghui;
import com.jian.service.XuanjianghuiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

//宣讲会
@Controller
@RequestMapping("/xuanjianghui")
public class XuanjianghuiController {
    @Autowired
    XuanjianghuiService xuanjianghuiService;

    //获取全部宣讲会
    @RequestMapping("/findAllXjhByPage")
    public void findAllXjhByPage(int pageIndex, HttpServletResponse response) throws Exception {
        response.setContentType("text/html;charset=utf-8");
        System.out.println("-------------");
        System.out.println(pageIndex);
        List<Xuanjianghui> xjhs=xuanjianghuiService.findAllXjhByPage(pageIndex);
        System.out.println(xjhs.size());

        response.getWriter().write(JSONObject.toJSON(xjhs).toString());
    }

    //获取宣讲会详细信息
    @RequestMapping("/findXjhById")
    public void findXjhById(int xuanjiangId,HttpServletResponse response)throws Exception{
        response.setContentType("text/html;charset=utf-8");
        System.out.println("-------------");
        Xuanjianghui xjh=xuanjianghuiService.findXjhById(xuanjiangId);
        System.out.println(xjh.toString());
        response.getWriter().write(JSONObject.toJSON(xjh).toString());
    }

    //发布新宣讲会
    @RequestMapping("/postXjh")
    public void postXjh(Xuanjianghui xjh,HttpServletResponse response) throws Exception{
        response.setContentType("text/html;charset=utf-8");
        int res=xuanjianghuiService.postXuanjianghui(xjh);
        System.out.println(xjh);
        if(res==1) response.getWriter().write("1");
        else response.getWriter().write("0");
    }

    //删除宣讲会
    @RequestMapping("deleteXjh")
    public void deleteXjh(int xuanjiangId,HttpServletResponse response) throws Exception{
        response.setContentType("text/html;charset=utf-8");
        int res=xuanjianghuiService.deleteXuan(xuanjiangId);
        System.out.println(xuanjiangId);
        if(res==1) response.getWriter().write("1");
        else response.getWriter().write("0");
    }
}
