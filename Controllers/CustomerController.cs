using Microsoft.AspNetCore.Mvc;
using NewsServiceSystem.Data;
using NewsServiceSystem.Models;

namespace NewsServiceSystem.Controllers
{
    public class CustomerController : Controller
    {
        private readonly ApplicationDbContext _db;

        public CustomerController(ApplicationDbContext db)
        {
            _db = db;
        }
        public IActionResult Index()
        {
            IEnumerable<Customer> Customers = _db.Customers.ToList();
            return View(Customers);
        }
        public IActionResult Create()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(Customer obj)
        {
            if (ModelState.IsValid)
            {
                _db.Customers.Add(obj);
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
            var Customer = _db.Customers.Find(id);
            if (Customer == null)
            {
                return NotFound();
            }
            return View(Customer);
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(Customer obj)
        {

            if (ModelState.IsValid)
            {
                _db.Customers.Update(obj);
                _db.SaveChanges();
                return RedirectToAction("Index");

            }
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult DeletePost(int? id)
        {
            var obj = _db.Customers.Find(id);
            if (obj == null)
            {
                return NotFound();
            }
            _db.Customers.Remove(obj);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }

    
}
}
