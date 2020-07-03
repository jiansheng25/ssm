package jian.test;


import com.jian.dao.IApplicationDao;
import com.jian.pojo.Application;
import com.jian.pojo.Student;
import com.jian.service.StudentService;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.io.InputStream;
import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class testMybatis {

    @Autowired
    StudentService studentService;

    @Test
    public void run2() throws Exception {
      Student student=studentService.findStudentByOpendid("123456");
        System.out.println(student.getAddress());
    }
    @Test
    public void TestException() {

        try {
            int k = 5 / 0;

            //下标越界异常：ArrayIndexOutOfBoundsException
            int j[] = new int[5];
            j[10] = 10;

            //空指针异常：NullPointerException
            String str = null;
            str.length();
        } catch (Exception e) {
            System.out.println("错误");
        }
        //任何除数不能为0:ArithmeticException
    }
}
