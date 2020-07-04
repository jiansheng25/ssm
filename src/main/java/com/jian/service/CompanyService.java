package com.jian.service;

import com.jian.pojo.Company;
import com.jian.pojo.Zph_company;

import java.util.List;

public interface CompanyService {
    List<Zph_company> findCompanyForZphById(int zphId);

    //
    List<Company> getCompany(Integer pageIndex,String status1);
}
