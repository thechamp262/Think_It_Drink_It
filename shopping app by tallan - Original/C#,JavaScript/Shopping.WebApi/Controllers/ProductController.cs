﻿/*************************************************************************
*
*    Copyright (c) 2013 ThinkitDrinkit Inc.  All rights reserved. 
*
*    Use of this sample source code is subject to the terms of the Microsoft Limited Public License
*    at http://msdn.microsoft.com/en-us/cc300389.aspx#P and is provided AS-IS. 
*
*    For more information about Tallan, visit our website, http://ThinkitDrinkit.com/.     
*
*    To see the topic that inspired this sample app, go to http://msdn.microsoft.com/en-us/library/windows/apps/jj635241. 
*
************************************************************************/

using ECommerce.WebApi.Data;
using Shopping.Web.Models;
using System.Web.Http;

namespace ECommerce.WebApi.Controllers
{
    public class ProductController : ApiController
    {
        private readonly IRepository<Product> _productRepository;

        public ProductController()
            : this(new ProductsRepository(new WebPathResolver()))
        { }

        public ProductController(IRepository<Product> productRepository)
        {
            _productRepository = productRepository;
        }

        public Product Get(int id)
        {
            return _productRepository.Get(id);
        }
    }
}
