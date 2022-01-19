using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using m3final.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace m3final.Controllers
{
    public class HomeController : Controller
    {
        
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Grade_Calculator()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Grade_Calculator (Grade_Calculator model)
        {
            return View();
        }
    }
}
