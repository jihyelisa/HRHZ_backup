package main.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import main.service.MainService;

@Controller
public class MainController {
	
	@Autowired
	private MainService mainService;
	
	@GetMapping(value="")
	public String main() {
		return "index";
	}

	@GetMapping(value="/category")
	public String category() {
		return "/views/category/category";
	}
	
	@GetMapping(value="/brand")
	public String brand() {
		return "/views/brand/brand";
	}
	
	@GetMapping(value="/myPage")
	public String mypage() {
		return "/views/my/myPage";
	}
	
	@GetMapping(value="/signIn")
	public String siginIn() {
		return "/views/member/signIn";
	}

	
	@GetMapping(value="/magazineAmonzTakeALook")
	public String magazineAmonzTakeALook() {
		return "/views/main/magazineAmonzTakeALook";
	}
	
	@GetMapping(value="/magazineCarotcollection")
	public String magazineCarotcollection() {
		return "/views/main/magazineCarotcollection";
	}
	
	
	@GetMapping(value="/magazineInstargram")
	public String magazineInstargram() {
		return "/views/main/magazineInstargram";
	}
	
	
	@GetMapping(value="/magazineBicycle")
	public String magazineBicycle() {
		return "/views/main/magazineBicycle";
	}

	@GetMapping(value="/magazineEmptycart")
	public String magazineEmptycart() {
		return "/views/main/magazineEmptycart";
	}
	
	@GetMapping(value="/magazineMyStarryDeal")
	public String magazineMyStarryDeal() {
		return "/views/main/magazineMyStarryDeal";
	}
	
	@GetMapping(value="/magazineRomanticMode")
	public String magazineRomanticMode() {
		return "/views/main/magazineRomanticMode";
	}
	
	@GetMapping(value="/magazineABC")
	public String magazine_1() {
		return "/views/main/magazineABC";
	}
	

	@GetMapping(value="/magazineMidnightMoment")
	public String magazineMidnightMoment() {
		return "/views/main/magazineMidnightMoment";
	}
	
	
	@GetMapping(value="/magazineSpringWind")
	public String magazineSpringWind() {
		return "/views/main/magazineSpringWind";
	}
	
    @PostMapping(value = "/bestProduct")
    @ResponseBody
    public List<Map<String, Object>> bestProduct(HttpSession session) throws Exception {
    	return mainService.getBestProductList();
    }
    
    @PostMapping(value = "/top100Product")
    @ResponseBody
    public List<Map<String, Object>> top100Product(HttpSession session) throws Exception {
    	return mainService.getTop100Product();
    }
    

    @PostMapping(value = "/likeCount")
    @ResponseBody
    public void likeCount(@RequestParam HashMap<String, String> dataMap) throws Exception {
    	mainService.likeCount(dataMap);
    }

	
}
