using Microsoft.AspNetCore.Mvc;
using NewsServiceSystem.Data;
using NewsServiceSystem.Models;

namespace NewsServiceSystem.Controllers
{
    public class SupplierController : Controller
    {
        private readonly ApplicationDbContext _db;

        public SupplierController(ApplicationDbContext db)
        {
            _db = db;
        }
        public IActionResult Index()
        {
            IEnumerable<Supplier> Supplier = _db.Supplier.ToList();
            return View(Supplier);
        }
        public IActionResult Create()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(Supplier obj)
        {
            if (ModelState.IsValid)
            {
                _db.Supplier.Add(obj);
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
            var Supplier = _db.Supplier.Find(id);
            if (Supplier == null)
            {
                return NotFound();
            }
            return View(Supplier);
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(Supplier obj)
        {

            if (ModelState.IsValid)
            {
                _db.Supplier.Update(obj);
                _db.SaveChanges();
                return RedirectToAction("Index");

            }
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult DeletePost(int? id)
        {
            var obj = _db.Supplier.Find(id);
            if (obj == null)
            {
                return NotFound();
            }
            _db.Supplier.Remove(obj);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}
