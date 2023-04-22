package purchase.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import hrhz.dto.ProductImageDTO;
import purchase.service.PurchaseService;

@Controller
@RequestMapping(value="purchase")
public class PurchaseController {
	@Autowired
	PurchaseService purchaseService;

	 @GetMapping(value="productDetail")
	 public String productDetail(Model model){
		 return "/views/purchase/productDetail";
	 }	
	

	 @GetMapping(value="payment")
	 public String payment(Model model){
		 return "/views/purchase/payment";
	 }	
	 
	 @GetMapping(value = "cartForm")
	 public String cartForm(Model model){
		 return "/views/purchase/cart";
	 }
	 
	 @PostMapping(value = "getProductImages")
	 @ResponseBody
	 public List<Map<String, Object>> getProductImages(@RequestParam String productCode) {
		 return purchaseService.getProductImages(productCode);
	 }
	 
}
