package com.jian.controller;

import com.alibaba.fastjson.JSONObject;
import com.jian.pojo.School;
import com.jian.pojo.Class;
import com.jian.pojo.Student;
import com.jian.pojo.Xueyuan;
import com.jian.service.SchoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.util.List;
import java.util.Random;

@Controller
@RequestMapping("/sc")
public class SchoolController {
    @Autowired
    SchoolService schoolService;
    //创建验证码
    @RequestMapping("/createVerCode")
    public void crateVerCode(HttpServletRequest request, HttpServletResponse response) throws Exception{
        response.setContentType("text/html;charset=utf-8");
        int height=40,width=100;
        //创建一对象，在内存中的图片
        BufferedImage image=new BufferedImage(width,height,BufferedImage.TYPE_INT_RGB);
        //美化图片
        Graphics g=image.getGraphics();
        g.setColor(Color.PINK);
        g.fillRect(0,0,width,height);
        //画边框
        g.setColor(Color.blue);
        g.drawRect(0,0,width-1,height-1);
        //将图片输出到页面
        String str="QWERTYUIOPASDFGHJKLZXCVBNM0123456789";
        Random ran=new Random();
        StringBuffer sb=new StringBuffer();
        for(int i=1;i<=4;i++){
            int index=ran.nextInt(str.length());
            char ch=str.charAt(index);
            sb.append(ch);
            g.drawString(ch+"",width/5*i,height/2);
        }
        //将验证码存入session
        String checkCode_session=sb.toString();
        request.getSession().setAttribute("checkCode_session",checkCode_session);
        g.setColor(Color.GREEN);
        for(int i=0;i<10;i++){
            int x1=ran.nextInt(width);
            int x2=ran.nextInt(width);
            int y1=ran.nextInt(height);
            int y2=ran.nextInt(height);
            g.drawLine(x1,y1,x2,y2);
        }
        ImageIO.write(image,"jpg",response.getOutputStream());
    }

    //登录
    @RequestMapping("/login")
    public void schooolLogin(School sc, String code,
                               HttpServletRequest request, HttpServletResponse response)throws Exception{
        request.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        HttpSession session=request.getSession();
        String code1=(String) session.getAttribute("checkCode_session");
        String i="11";//验证码错误
        if(code1.equals(code.toUpperCase())){
            School school=schoolService.schoolLogin(sc);
            if(school!=null){
                i="1";//账号密码正确
                //保存当前用户
                session.setAttribute("courrentSchool",school);
                session.setMaxInactiveInterval(7*24*60*60);
            }else {
                i="0";//账号密码错误
            }
        }
        response.getWriter().write(i);
    }

    //获取当前用户信息
    @ResponseBody
    @RequestMapping("/scInfo")
    public String findSchoolInfo(HttpServletRequest request){
        School school=(School) request.getSession().getAttribute("courrentSchool");
        System.out.println(school);
        return JSONObject.toJSON(school).toString();
    }

    //获取所有学生
    @ResponseBody
    @RequestMapping("/findAllStu")
    public String findAllStudent(Integer pageIndex){
        List<Student> students=schoolService.findAllStudent(pageIndex);
        return JSONObject.toJSON(students).toString();
    }

    //获取所有学院
    @ResponseBody
    @RequestMapping("/findAllXy")
    public String findAllXy(){
        List<Xueyuan> xueyuans=schoolService.findAllXueyuan();
        return JSONObject.toJSON(xueyuans).toString();
    }

    //根据学院获取班级
    @ResponseBody
    @RequestMapping("/findClassByXy")
    public String findClassBy(Integer xyId){
       List<Class> stuClasses=schoolService.findClassByXyId(xyId);
       return  JSONObject.toJSON(stuClasses).toString();
    }

    //a
    //根据学院获取学生
    @ResponseBody
    @RequestMapping("/findStuByXyId")
    public String findStuByXyId(Integer xyId,Integer pageIndex){
        List<Student> students=schoolService.findStudentByXyId(xyId,pageIndex);
        return JSONObject.toJSON(students).toString();
    }

    //根据班级获取学
    @ResponseBody
    @RequestMapping("/findStuByClass")
    public String findStuByClass(Integer pageIndex,String stuClass){
        List<Student> students=schoolService.findStudentByClass(pageIndex,stuClass);
        return JSONObject.toJSON(students).toString();
    }
}
