<?php

namespace projetBundle\Controller;

namespace projetBundle\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use FOS\RestBundle\Controller\Annotations as Rest;
use projetBundle\Entity\Recu;
/**
 * @Route("/api_v1/recu")
 */
class RecuControllerController extends Controller
{
    /**
      * @Route("/{ref}", name="get_byref",methods={"GET"})
      */
   public function gettyperecuAction(Request $request,$ref){
     //,r.first_name,r.last_name,r.motif,r.sum,r.id_recu_status,r.id_recu_type_unite,tu.id,rs.id,rt.name
     //,projetBundle:RecuTypeUnite tu, projetBundle:RecuStatus rs, projetBundle:RecuType rt
    //afficher type de recu selon ref
    $em = $this->getDoctrine()->getManager('recubd'); // on appelle doctrine
    $query = $em->createQuery( //creation de la requête
      'SELECT r.matricule,r.firstName,r.lastName,r.motif,r.sum,r.idRecuStatus,rs.description
       FROM projetBundle:Recu r,projetBundle:RecuStatus rs
       where r.reference = :reference and r.idRecuStatus = :idRecuStatus 
       ')
       
        ->setParameters([
           'reference' => $ref
          

       ]);
   
      $rec = $query->getResult(); //variable qui récupère la requête


       return new JsonResponse($rec);
   }





}
