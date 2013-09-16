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

using System;
using System.Collections.Generic;
using Shopping.Web.Models;

namespace ECommerce.WebApi.Data
{
    public class CatalogRepository : RepositoryBase<Catalog>
    {
        private Catalog _cachedCatalog;
        
        public CatalogRepository(IPathResolver pathResolver)
            :   base(pathResolver)
        {
        }

        public override List<Catalog> GetAll()
        {
            throw new NotImplementedException();
        }

        public override Catalog Get(int id)
        {
            if (_cachedCatalog == null)
            {
                var products = LoadJson<List<MiniProduct>>("SampleData\\products.json");

                _cachedCatalog = new Catalog()
                    {
                        version = 1,
                        name = "Catalog1",
                        products = products
                    };
            }

            return _cachedCatalog;
        }
    }
}