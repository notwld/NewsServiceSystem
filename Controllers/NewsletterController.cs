using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NewsServiceSystem.Data;
using NewsServiceSystem.Models;

namespace NewsServiceSystem.Controllers
{
    public class NewsletterController : Controller
    {
        private readonly ApplicationDbContext _db;

        public NewsletterController(ApplicationDbContext db)
        {
            _db = db;
        }
        public IActionResult Index()
        {
            IEnumerable<Newsletter> newsletters = _db.Newsletters.ToList();
            return View(newsletters);
        }
        public IActionResult Create()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(Newsletter obj)
        {
            if (ModelState.IsValid)
            {
                _db.Newsletters.Add(obj);
                _db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View();
        }
        public IActionResult Edit(int? id)
        {
            if (id == null || id == 0)
            {
                return NotFound();
            }
            var Newsletter = _db.Newsletters.Find(id);
            if (Newsletter == null)
            {
                return NotFound();
            }
            return View(Newsletter);
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(Newsletter obj)
        {
            
            if (ModelState.IsValid)
            {
                _db.Newsletters.Update(obj);
                _db.SaveChanges();
                return RedirectToAction("Index");

            }
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult DeletePost(int? id)
        {
            var obj = _db.Newsletters.Find(id);
            if (obj == null)
            {
                return NotFound();
            }
            _db.Newsletters.Remove(obj);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }
    
}
}
