package com.jian.service.impl;

import com.jian.dao.ICompanyDao;
import com.jian.pojo.Company;
import com.jian.pojo.Zph_company;
import com.jian.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CompanyServiceImpl implements CompanyService {
    @Autowired
    ICompanyDao companyDao;
    /**
     *
     */
    @Override
    public List<Zph_company> findCompanyForZphById(int zphId) {
        return companyDao.findCompanyForZphById(zphId);
    }

    @Override
    public List<Company> getCompany(Integer pageIndex, String status1) {
        return companyDao.getCompany((pageIndex-1)*14,status1);
    }
}
