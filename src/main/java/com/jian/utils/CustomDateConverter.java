package com.jian.utils;

import org.springframework.core.convert.converter.Converter;

import java.text.SimpleDateFormat;
import java.util.Date;

public class CustomDateConverter {

    public String convert(Date date) {
        // 将日期串转换成日期格式（格式是yyyy-MM-dd）
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
        return simpleDateFormat.format(date);
    }
}
