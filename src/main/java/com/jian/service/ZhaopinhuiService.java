package com.jian.service;

import com.jian.pojo.Zhaopinhui;
import com.jian.pojo.Zph_company;

import java.util.List;

public interface ZhaopinhuiService {
    List<Zhaopinhui> findAllZphByPage(int pageIndex);
    List<Zhaopinhui> findAllCompanyByZphId(int zphId);
}
