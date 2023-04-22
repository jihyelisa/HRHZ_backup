package brand.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import brand.service.BrandService;

@Controller
@RequestMapping(value = "brand")
public class BrandController {
	@Autowired
	BrandService brandService;
	
	@GetMapping(value = "brandDetail")
	public String brandDetail(Model model) {
		return "/views/brand/brandDetail";
	}
	 
	@PostMapping(value = "/getBrandList")
	@ResponseBody
	public List<Map<String, Object>> getBrandList() {
		return brandService.getBrandList();
	}
}
